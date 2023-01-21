import { Orders } from "../type";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "./hooks";
import axios from "axios";
import { openUtilModal } from "../../features/utilModal/utilModalSlice";
import { useNavigate } from "react-router-dom";

const useOrder = () => {
  const { login, userToken } = useAppSelector((state) => state.login);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [ordersResult, setOrdersResult] = useState<Orders | null>(null);

  useEffect(() => {
    if (login) {
      const fetchUserOrder = async () => {
        try {
          const response = await axios.get(
            "http://localhost:5000/api/users/getUserOrders/",
            {
              headers: {
                Authorization: "Bearer " + userToken,
              },
            }
          );
          if (response.data.orders.length === 0) {
            setOrdersResult(null);
          }
          if (!(response.data.orders.length === 0)) {
            setOrdersResult(response.data);
          }
        } catch (err) {
          dispatch(openUtilModal({ message: "Something went wrong." }));
          return navigate("/");
        }
      };
      fetchUserOrder();
    }
  }, [login]);

  return { ordersResult };
};

export default useOrder;