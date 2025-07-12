import { Button, Card, CardBody, Input } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import useRegister from "./useRegister";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const { visiblePassword, handleVisiblePassword } = useRegister();
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div className="flex w-full flex-col items-center justify-center gap-10 lg:flex-row lg:gap-20">
      <div className="flex w-full flex-col items-center justify-center gap-10 lg:w-1/3">
        <Image
          src="/images/general/logo.svg"
          alt="logo"
          width={180}
          height={180}
        />
        <Image
          src="/images/illustration/login.svg"
          className="w-2/3 lg:w-full"
          alt="login"
          width={1024}
          height={1024}
        />
      </div>

      <Card>
        <CardBody className="p-8">
          <h2 className="text-xl font-bold text-danger-500">Create Account</h2>
          <p className="mb-4 text-small">
            Have an account?&nbsp;
            <Link href="/login" className="font-semibold text-danger-400">
              Login Here
            </Link>
          </p>
          <form className="flex w-80 flex-col gap-4">
            {/* Fullname */}
            <Input
              type="text"
              label="Fullname"
              variant="bordered"
              autoComplete="off"
            />

            {/* Username */}
            <Input
              type="text"
              label="Username"
              variant="bordered"
              autoComplete="off"
            />

            {/* Email */}
            <Input
              type="email"
              label="Email"
              variant="bordered"
              autoComplete="off"
            />

            {/* Password */}
            <Input
              label="Password"
              variant="bordered"
              autoComplete="off"
              type={visiblePassword.password ? "text" : "password"}
              endContent={
                <button
                  className="focus:outline-none"
                  type="button"
                  onClick={() => handleVisiblePassword("password")}
                >
                  {visiblePassword.password ? (
                    <FaEye className="pointer-events-none text-xl text-default-400" />
                  ) : (
                    <FaEyeSlash className="pointer-events-none text-xl text-default-400" />
                  )}
                </button>
              }
            />

            {/* Password Confirmation */}
            <Input
              label=" Confirm password"
              variant="bordered"
              autoComplete="off"
              type={visiblePassword.passwordConfirmation ? "text" : "password"}
              endContent={
                <button
                  className="focus:outline-none"
                  type="button"
                  onClick={() => handleVisiblePassword("passwordConfirmation")}
                >
                  {visiblePassword.passwordConfirmation ? (
                    <FaEye className="pointer-events-none text-xl text-default-400" />
                  ) : (
                    <FaEyeSlash className="pointer-events-none text-xl text-default-400" />
                  )}
                </button>
              }
            />
            <Button color="danger" size="lg" type="submit">
              Register
            </Button>
          </form>
        </CardBody>
      </Card>
    </div>
  );
};

export default Register;
