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
        <CardBody className="flex flex-col gap-4">
          <Input label="Email" size="lg" autoFocus />
          <Input label="Password" size="lg" />
          <div className="-ml-2.5">
            <Checkbox label="Remember Me" />
          </div>
        </CardBody>
        <CardFooter className="pt-0">
          <Button fullWidth type="submit" className="bg-congress-blue-950">
            Sign In
          </Button>
          <AuthCardFooter type="login" />
        </CardFooter>
      </Card>
    </AuthLayout>
  );
}
