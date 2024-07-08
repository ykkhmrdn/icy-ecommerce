import AuthCardFooter from "../components/Elements/AuthCard/AuthCardFooter";
import AuthLayout from "../components/Layouts/AuthLayouts";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";

export function LoginCard() {
  const handleLogin = (event) => {
    event.preventDefault();
    localStorage.setItem('email', event.target.email.value);
    localStorage.setItem('password', event.target.password.value);
    window.location.href = '/products';
  };

  return (
    <AuthLayout>
      <Card className="w-96">
        <CardHeader
          variant="gradient"
          className="grid mb-4 h-28 place-items-center bg-congress-blue-950"
        >
          <Typography variant="h3" color="white">
            Sign In
          </Typography>
        </CardHeader>
        <form onSubmit={handleLogin}>
          <CardBody className="flex flex-col gap-4">
            <Input
              label="Email"
              type="email"
              name="email"
              size="lg"
              autoFocus
            />
            <Input label="Password" type="password" name="password" size="lg" />
            <div className="-ml-2.5">
              <Checkbox label="Remember Me" />
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Button
              fullWidth
              type="submit"
              className="bg-congress-blue-950"
              onClick={() => {}}
            >
              Sign In
            </Button>
            <AuthCardFooter type="login" />
          </CardFooter>
        </form>
      </Card>
    </AuthLayout>
  );
}
