"use client"
import { useRouter, useSearchParams } from "next/navigation";
import { FormElements } from "@components/forms/FormElements";
import Link from "next/link";
import { useLazyGetProfileQuery, useLoginMutation } from "@services/dataService";
import { User } from "@models/business";
import { cookieService } from "@utils/coockieService";
import { updateUser } from "@redux/slices/userSlice";
import { useDispatch } from "react-redux";
import { Page } from "@components/Page";

const Login = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const dispatch = useDispatch();
  const [login, {isLoading}] = useLoginMutation();
  const [getProfile] = useLazyGetProfileQuery();

  const onSubmit = async (value: User) => {
    try {
      const {data} = await login(value);
      cookieService.set('token', data.access_token, {maxAge: 36000});
      const {data: user} = await getProfile();
      dispatch(updateUser(user));
      router.push(searchParams.get('return') ?? '/');
    } catch {
    }
  }

  return (
      <Page>
        <div>Login</div>
      </Page>
  )
}

export default Login;
