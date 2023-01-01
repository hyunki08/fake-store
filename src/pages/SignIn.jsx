import Layout from "../components/Layouts/Layout";
import SignInForm from "../components/SignIn/SignInForm";

const SignIn = () => {
  return (
    <>
      <Layout header={false} footer={false}>
        <SignInForm />
      </Layout>
    </>
  );
};

export default SignIn;
