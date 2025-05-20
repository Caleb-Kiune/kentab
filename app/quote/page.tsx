"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"

export default function QuotePage() {
  const [formData, setFormData] = useState({
    insuranceType: "",
    insuranceSubtype: "", // Added for subtypes like Own Goods/General Cartage
    coverType: "",
    vehicleValue: "",
    manufactureYear: "",
    tonnage: "",
    passengerCapacity: "",
    excessProtector: false, // Added for benefits
    courtesyCar: false, // Added for benefits
    politicalTerrorism: false, // Added for benefits
    passengerLiability: false // Added for benefits
  })

  const [premium, setPremium] = useState<number | null>(null)

  const handleInputChange = (id: string, value: any) => {
    setFormData({ ...formData, [id]: value })
    // Reset premium when form data changes
    setPremium(null)
  }

  const calculatePremium = () => {
    // TODO: Implement detailed premium calculation logic based on rating card
    console.log("Calculating premium with data:", formData)
    // This is a placeholder calculation
    let estimatedPremium = 0

    if (formData.insuranceType === "motor-private" && formData.coverType === "comprehensive") {
       // Example: Simple rate based on sum insured
       const value = parseFloat(formData.vehicleValue);
       if (!isNaN(value)) {
          if (value >= 2500000) estimatedPremium = value * 0.03;
          else if (value >= 1500000) estimatedPremium = value * 0.04;
          else if (value >= 1000000) estimatedPremium = value * 0.05;
          else if (value >= 500000) estimatedPremium = value * 0.06;
       }
    }
    // Add more complex logic for other types, TPO, minimums, benefits, etc.

    // Ensure minimum premium (example, needs refinement per category)
    if (estimatedPremium < 37500) estimatedPremium = 37500;

    setPremium(estimatedPremium)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    calculatePremium()
  }

  return (
    <div className="container py-16">
      <h1 className="text-3xl font-bold text-center mb-8">Get a Quote</h1>

      <Card className="max-w-2xl mx-auto p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Insurance Type */}
          <div className="space-y-2">
            <Label htmlFor="insuranceType">Insurance Type</Label>
            <Select
              value={formData.insuranceType}
              onValueChange={(value) => handleInputChange("insuranceType", value)}
            >
              <SelectTrigger id="insuranceType">
                <SelectValue placeholder="Select insurance type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="motor-private">Motor Private & Double Cabins</SelectItem>
                <SelectItem value="motor-commercial">Motor Commercial</SelectItem>
                <SelectItem value="special-type">Special Type (Farm, Construction)</SelectItem>
                <SelectItem value="school-bus-van">School Bus / Van</SelectItem>
                <SelectItem value="motor-cycle-tuktuk">Motor Cycle & Tuk Tuk (Corporate & Delivery)</SelectItem>
                <SelectItem value="uber-psv">UBER (Online Platform Taxis) PSV</SelectItem>
                <SelectItem value="tour-vans-tsv">CHEUFFER DRIVEN (Tour Vans) TSV</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Insurance Subtype (Conditional) */}
          {formData.insuranceType === "motor-commercial" && (
             <div className="space-y-2">
               <Label htmlFor="insuranceSubtype">Commercial Type</Label>
               <Select
                 value={formData.insuranceSubtype}
                 onValueChange={(value) => handleInputChange("insuranceSubtype", value)}
               >
                 <SelectTrigger id="insuranceSubtype">
                   <SelectValue placeholder="Select commercial type" />
                 </SelectTrigger>
                 <SelectContent>
                   <SelectItem value="own-goods">Own Goods</SelectItem>
                   <SelectItem value="general-cartage">General Cartage</SelectItem>
                 </SelectContent>
               </Select>
             </div>
          )}

           {formData.insuranceType === "motor-private" && (
             <div className="space-y-2">
               <Label htmlFor="insuranceSubtype">Private Type</Label>
               <Select
                 value={formData.insuranceSubtype}
                 onValueChange={(value) => handleInputChange("insuranceSubtype", value)}
               >
                 <SelectTrigger id="insuranceSubtype">
                   <SelectValue placeholder="Select private type" />
                 </SelectTrigger>
                 <SelectContent>
                   <SelectItem value="single-unit">Single Unit</SelectItem>
                   <SelectItem value="fleet">Fleet (3 & Above Vehicles)</SelectItem>
                 </SelectContent>
               </Select>
             </div>
           )}

          {/* Cover Type */}
          <div className="space-y-2">
            <Label htmlFor="coverType">Cover Type</Label>
            <Select
              value={formData.coverType}
              onValueChange={(value) => handleInputChange("coverType", value)}
            >
              <SelectTrigger id="coverType">
                <SelectValue placeholder="Select cover type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="comprehensive">Comprehensive</SelectItem>
                <SelectItem value="tpo">Third Party Only (TPO)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Vehicle Value (Conditional) - Only for Comprehensive */}
          {formData.coverType === "comprehensive" && (
             <div className="space-y-2">
               <Label htmlFor="vehicleValue">Vehicle Value (Sum Insured - KES)</Label>
               <Input
                 id="vehicleValue"
                 type="number"
                 placeholder="Enter vehicle value"
                 value={formData.vehicleValue}
                 onChange={(e) => handleInputChange("vehicleValue", e.target.value)}
               />
             </div>
          )}

          {/* Manufacture Year (Conditional) - Primarily for Comprehensive age check */}
          {formData.coverType === "comprehensive" && (
             <div className="space-y-2">
               <Label htmlFor="manufactureYear">Manufacture Year</Label>
               <Input
                 id="manufactureYear"
                 type="number"
                 placeholder="Enter manufacture year"
                 min="1900"
                 max={new Date().getFullYear()}
                 value={formData.manufactureYear}
                 onChange={(e) => handleInputChange("manufactureYear", e.target.value)}
               />
             </div>
          )}

          {/* Tonnage (Conditional) - Only for Commercial TPO */}
          {formData.insuranceType === "motor-commercial" && formData.coverType === "tpo" && (
            <div className="space-y-2">
              <Label htmlFor="tonnage">Tonnage</Label>
              <Select
                value={formData.tonnage}
                onValueChange={(value) => handleInputChange("tonnage", value)}
              >
                <SelectTrigger id="tonnage">
                  <SelectValue placeholder="Select tonnage" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="upto-3">Up to 3 Tonnes</SelectItem>
                  <SelectItem value="4-8">4 - 8 Tonnes</SelectItem>
                  <SelectItem value="9-15">9 - 15 Tonnes</SelectItem>
                  <SelectItem value="above-15">Above 15 Tonnes</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}

          {/* Passenger Capacity (Conditional) - Only for School Bus/Van TPO */}
          {formData.insuranceType === "school-bus-van" && formData.coverType === "tpo" && (
            <div className="space-y-2">
              <Label htmlFor="passengerCapacity">Passenger Capacity</Label>
              <Select
                value={formData.passengerCapacity}
                onValueChange={(value) => handleInputChange("passengerCapacity", value)}
              >
                <SelectTrigger id="passengerCapacity">
                  <SelectValue placeholder="Select passenger capacity" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="upto-14">Upto 14 Passengers</SelectItem>
                  <SelectItem value="upto-25">Upto 25 Passengers</SelectItem>
                  <SelectItem value="over-25">Over 25 Passengers</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}

          {/* Additional Benefits */}
          {(formData.coverType === "comprehensive" || formData.coverType === "tpo") &&
           (formData.insuranceType === "motor-private" ||
            formData.insuranceType === "motor-commercial" ||
            formData.insuranceType === "special-type" ||
            formData.insuranceType === "school-bus-van" ||
            formData.insuranceType === "uber-psv" ||
            formData.insuranceType === "tour-vans-tsv") && (
              <div className="space-y-4">
                 <h3 className="text-lg font-medium">Additional Benefits</h3>
                 <div className="flex items-center space-x-2">
                   <Checkbox id="excessProtector" checked={formData.excessProtector} onCheckedChange={(checked) => handleInputChange("excessProtector", checked)} />
                   <Label htmlFor="excessProtector">Own Damage Excess Protector</Label>
                 </div>
                 {formData.coverType === "comprehensive" && formData.insuranceType === "motor-private" && (
                    <div className="flex items-center space-x-2">
                      <Checkbox id="courtesyCar" checked={formData.courtesyCar} onCheckedChange={(checked) => handleInputChange("courtesyCar", checked)} />
                      <Label htmlFor="courtesyCar">Courtesy Car</Label>
                    </div>
                 )}
                 {formData.insuranceType === "special-type" && formData.coverType === "comprehensive" && (
                    <div className="flex items-center space-x-2">
                      <Checkbox id="politicalTerrorism" checked={formData.politicalTerrorism} onCheckedChange={(checked) => handleInputChange("politicalTerrorism", checked)} />
                      <Label htmlFor="politicalTerrorism">Political Violence & Terrorism</Label>
                    </div>
                 )}
                 {(formData.insuranceType === "school-bus-van" || formData.insuranceType === "uber-psv" || formData.insuranceType === "tour-vans-tsv") && formData.coverType === "tpo" && (
                    <div className="flex items-center space-x-2">
                      <Checkbox id="passengerLiability" checked={formData.passengerLiability} onCheckedChange={(checked) => handleInputChange("passengerLiability", checked)} />
                      <Label htmlFor="passengerLiability">Passenger Legal Liability (PLL)</Label>
                    </div>
                 )}
              </div>
           )}

          <Button type="submit" className="w-full bg-primary-600 hover:bg-primary-700">
            Calculate Premium
          </Button>
        </form>
      </Card>

      {premium !== null && (
        <div className="mt-8 text-center">
          <h3 className="text-2xl font-bold">Estimated Premium: <span className="text-primary-600">KES {premium.toFixed(2)}</span></h3>
        </div>
      )}
    </div>
  )
}