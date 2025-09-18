import React, { useState } from 'react';
import { MessageCircle, Phone, Mail, MapPin } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { toast } from 'sonner';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    package: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast.success('Thank you! We\'ve received your message and will get back to you soon.');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      package: '',
      message: ''
    });
    
    setIsSubmitting(false);
  };

  const openWhatsApp = (packageType) => {
    let message = 'Hi Taqwa Labs, I have a question about your web design services.';
    
    if (packageType) {
      message = `Hi Taqwa Labs, I'm interested in the ${packageType} package. Please share more details.`;
    }
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/97455953483?text=${encodedMessage}`, '_blank');
  };

  const position = [25.2854, 51.5310]; // Doha, Qatar coordinates

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center mb-12">Get in Touch</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-2xl">Send us a Message</CardTitle>
              <CardDescription>Fill out the form below and we'll get back to you soon.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    required
                    className="bg-gray-700 border-gray-600"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    required
                    className="bg-gray-700 border-gray-600"
                  />
                </div>
                <div>
                  <Label htmlFor="package">Package</Label>
                  <Select value={formData.package} onValueChange={(value) => handleInputChange('package', value)}>
                    <SelectTrigger className="bg-gray-700 border-gray-600">
                      <SelectValue placeholder="Select a package" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800 border-gray-700">
                      <SelectItem value="basic">Basic</SelectItem>
                      <SelectItem value="standard">Standard</SelectItem>
                      <SelectItem value="premium">Premium</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    required
                    className="bg-gray-700 border-gray-600"
                  />
                </div>
                <div className="flex gap-4">
                  <Button type="submit" disabled={isSubmitting} className="bg-[#18cb96] hover:bg-[#15b085]">
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                  <Button type="button" variant="outline" onClick={() => openWhatsApp(formData.package)} className="border-gray-600 hover:bg-gray-700">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    WhatsApp
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="bg-gray-800 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-[#18cb96]" />
                </div>
                <div>
                  <p className="font-semibold">Phone</p>
                  <a href="tel:+97455953483" className="text-gray-400 hover:text-white">+974 5595 3483</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-gray-800 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-[#18cb96]" />
                </div>
                <div>
                  <p className="font-semibold">Email</p>
                  <a href="mailto:info@taqwalabs.com" className="text-gray-400 hover:text-white">info@taqwalabs.com</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-gray-800 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-[#18cb96]" />
                </div>
                <div>
                  <p className="font-semibold">Location</p>
                  <p className="text-gray-400">Doha, Qatar</p>
                </div>
              </div>
            </div>
          </div>
          <div className="h-96 rounded-lg overflow-hidden">
            <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }}>
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={position}>
                <Popup>
                  Taqwa Labs, Doha, Qatar
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
