"use client"
import { useRouter } from "next/navigation";
import { useRegisterMutation } from "@services/dataService";
import { Page } from "@components/Page";

const Register = () => {
  const router = useRouter();
  const [trigger, {isLoading}] = useRegisterMutation();

  const onSubmit = async (value: any) => {
    try {
      await trigger(value);
      router.push('/');
    } catch {
    }
  }

  return (
      <Page>
        <div>Register</div>
      </Page>
  )
}

export default Register;
