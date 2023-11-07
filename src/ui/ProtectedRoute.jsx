/* eslint-disable react/prop-types */
import { styled } from "styled-components";
import Spinner from "./Spinner";
import { useUser } from "../features/authentication/useUser";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  //1. Load the authenticated user
  const { isAuthenticated, isLoading } = useUser();
  //console.log(isAuthenticated);

  //2. If there is no authenticate - login page
  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate("/login");
    },
    [isAuthenticated, isLoading, navigate]
  );

  //3. Show spinner
  if (isLoading)
    return (
      <FullPage>
        {" "}
        <Spinner />;{" "}
      </FullPage>
    );

  //4. if user is authenticated - render the app
  if (isAuthenticated) return children;
  return children;
}

export default ProtectedRoute;
