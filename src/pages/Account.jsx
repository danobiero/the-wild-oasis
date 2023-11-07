import UpdateUserDataForm from "../features/authentication/UpdateUserDataForm";
import UpdatePasswordForm from "../features/authentication/UpdatePasswordForm";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Account() {
  return (
    <>
      <Heading as="h1">Update Your Account</Heading>

      <Row>
        <Heading as="h2">Update User Data</Heading>
        <UpdateUserDataForm />
      </Row>

      <Row>
        <Heading as="h2">Update User Password</Heading>
        <UpdatePasswordForm />
      </Row>
    </>
  );
}

export default Account;
