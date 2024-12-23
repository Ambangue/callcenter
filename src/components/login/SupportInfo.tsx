import { Phone, Mail } from "lucide-react";

export const SupportInfo = () => {
  return (
    <div className="space-y-4 text-center text-sm text-gray-600">
      <div className="flex items-center justify-center gap-2">
        <Phone className="h-4 w-4" />
        <span>Support téléphonique : 0123456789</span>
      </div>
      <div className="flex items-center justify-center gap-2">
        <Mail className="h-4 w-4" />
        <span>Email : support@anpe.bj</span>
      </div>
    </div>
  );
};