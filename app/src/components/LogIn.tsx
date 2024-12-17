import { useForm } from "react-hook-form";
import user from "../assets/User.png";
import lock from "../assets/Lock.png";
import Footer from "../sections/Footer";
import Newsletter from "../sections/Newsletter";
import Button from "./Button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import userLogin from "../api/queries/authorization";

export const loginSchema = z.object({
  username: z
    .string({
      required_error: "Name is required",
      invalid_type_error: "Name must be a string",
    })
    .min(3, { message: "Must be 3 or more characters long" })
    .regex(/^[a-zA-Z]+$/, { message: "Name must contain only letters" }),
  password: z.string().min(5, { message: "Password is required" }),
});

type LoginSchema = z.infer<typeof loginSchema>;

const LogIn = () => {
  //
  ////DATA
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginSchema) => {
    userLogin(data);
    console.log(data);
  };

  ////UI
  return (
    <>
      <section className="max-container bg-grayBG px-4 sm:px-[100px]">
        <div className="mx-auto flex w-full max-w-[400px] flex-col">
          <h2 className="pt-[60px] font-integralCFBold text-[32px] max-sm:leading-9 sm:pt-[100px] sm:text-5xl">
            Welcome Back!
          </h2>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full max-w-[400px] space-y-4 pb-9 pt-8 sm:pb-[80px]"
          >
            <div className="relative w-full">
              <img
                src={user}
                alt="envelope"
                width={20}
                height={20}
                className="absolute left-6 top-[30%] opacity-60"
              />
              <input
                {...register("username")}
                type="text"
                placeholder="Enter your user name"
                className="h-[48px] w-full rounded-full bg-white pl-[60px] focus:outline-none focus:ring-1 focus:ring-black max-sm:placeholder:text-[14px]"
              />
            </div>
            {errors.username && (
              <p className="pb-2 pl-5 leading-[1px] text-red-500">
                {errors.username.message}
              </p>
            )}

            <div className="relative w-full">
              <img
                src={lock}
                alt="lock"
                width={20}
                height={20}
                className="absolute left-6 top-[30%] opacity-60"
              />
              <input
                {...register("password")}
                type="password"
                placeholder="Enter your password"
                className="h-[48px] w-full rounded-full bg-white pl-[60px] focus:outline-none focus:ring-1 focus:ring-black max-sm:placeholder:text-[14px]"
              />
            </div>
            {errors.password && (
              <p className="pb-2 pl-5 leading-[1px] text-red-500">
                {errors.password.message}
              </p>
            )}
            <Button type="submit">Sign up</Button>
          </form>
        </div>
      </section>
      <div className="max-container">
        {" "}
        <Newsletter />
        <Footer />
      </div>
    </>
  );
};

export default LogIn;
