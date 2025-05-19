import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router";
import H1 from "@/components/typography/H1";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen flex items-center justify-center flex-col gap-4">
      <H1>Oops, Sorry!</H1>
      <p>This page is not yet ready!</p>

      <Button
        className="cursor-pointer"
        size={"lg"}
        onClick={() => navigate(-1)}
      >
        <ArrowLeft className="size-6" /> Go back
      </Button>
    </div>
  );
};

export default NotFound;
