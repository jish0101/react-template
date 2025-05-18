import H1 from "@/components/typography/H1";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen flex items-center justify-center flex-col gap-4">
      <H1>Hello, Welcome!</H1>

      <Button
        className="cursor-pointer"
        size={"lg"}
        onClick={() => navigate("/dashboard/articles/generated-articles")}
      >
        Visit Dashboard <ArrowRight className="size-6" />
      </Button>
    </div>
  );
};

export default Home;
