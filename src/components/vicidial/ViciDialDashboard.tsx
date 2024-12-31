import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export const ViciDialDashboard = () => {
  const [customerInfo, setCustomerInfo] = useState({
    title: "",
    firstName: "",
    middleInitial: "",
    lastName: "",
    address1: "",
    address2: "",
    address3: "",
    city: "",
    state: "",
    postCode: "",
    province: "",
    vendorId: "",
    gender: "",
    phone: "",
    dialCode: "",
    altPhone: "",
    show: "",
    email: "",
    comments: "",
    callNotes: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setCustomerInfo(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleDialNext = () => {
    toast.info("Composition du numéro suivant...");
  };

  const handleLeadSearch = () => {
    toast.info("Recherche de prospect...");
  };

  const handleStartRecording = () => {
    toast.success("Enregistrement démarré");
  };

  return (
    <Card className="p-6 space-y-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold">ViciDial Agent Interface</h2>
          <p className="text-muted-foreground">Session ID: 8600051</p>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm text-muted-foreground">Campaign: TOPCALL</span>
          <Button variant="destructive" size="sm">LOGOUT</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="flex gap-4">
            <Button className="w-full bg-green-600 hover:bg-green-700" onClick={handleDialNext}>
              DIAL NEXT NUMBER
            </Button>
            <Button variant="outline" className="w-full" onClick={handleLeadSearch}>
              LEAD SEARCH
            </Button>
          </div>

          <Button variant="secondary" className="w-full" onClick={handleStartRecording}>
            START RECORDING
          </Button>

          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label>Title</Label>
              <Input 
                value={customerInfo.title}
                onChange={(e) => handleInputChange("title", e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label>First Name</Label>
              <Input 
                value={customerInfo.firstName}
                onChange={(e) => handleInputChange("firstName", e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label>Last Name</Label>
              <Input 
                value={customerInfo.lastName}
                onChange={(e) => handleInputChange("lastName", e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label>Address 1</Label>
            <Input 
              value={customerInfo.address1}
              onChange={(e) => handleInputChange("address1", e.target.value)}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>City</Label>
              <Input 
                value={customerInfo.city}
                onChange={(e) => handleInputChange("city", e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label>State</Label>
              <Input 
                value={customerInfo.state}
                onChange={(e) => handleInputChange("state", e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Phone</Label>
              <Input 
                value={customerInfo.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label>Alt. Phone</Label>
              <Input 
                value={customerInfo.altPhone}
                onChange={(e) => handleInputChange("altPhone", e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label>Email</Label>
            <Input 
              type="email"
              value={customerInfo.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label>Gender</Label>
            <Select 
              value={customerInfo.gender}
              onValueChange={(value) => handleInputChange("gender", value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select gender" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="U">Undefined</SelectItem>
                <SelectItem value="M">Male</SelectItem>
                <SelectItem value="F">Female</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Comments</Label>
            <Textarea 
              value={customerInfo.comments}
              onChange={(e) => handleInputChange("comments", e.target.value)}
              className="min-h-[100px]"
            />
          </div>

          <div className="space-y-2">
            <Label>Call Notes</Label>
            <Textarea 
              value={customerInfo.callNotes}
              onChange={(e) => handleInputChange("callNotes", e.target.value)}
              className="min-h-[100px]"
            />
          </div>
        </div>
      </div>
    </Card>
  );
};