import H2 from "@/components/typography/H2";
import { Card, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import useUser from "@/store/useUser";
import { useNavigate } from "react-router";

const Login = () => {
  const userState = useUser();
  const navigate = useNavigate();

  return (
    <div className="h-screen flex justify-center items-center">
      <Card className="max-w-[300px] w-full">
        <CardHeader className="space-y-3">
          <H2>Login</H2>

          <Button
            onClick={() => {
              userState.setUser({
                role: "ADMIN",
                name: "John doe",
                id: "dlsfjdsaseroel",
                email: "john.doe@example.com",
              });
              navigate("/");
            }}
          >
            Login back!
          </Button>
        </CardHeader>
      </Card>
    </div>
  );
};

export default Login;
