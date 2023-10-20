import axiosInstance from "../../utils/axiosInstance";

export const getApi = async ({
  url,
  showToast = false,
}: {
  url: string;
  params?: any;
  showToast?: boolean;
}) => {
  try {
    const request = await axiosInstance.get(url, {});
    if (showToast) {
    }
    return request.data;
  } catch (error) {
    return error;
  }
};

export const postApi = async ({
  url,
  values,
}: {
  url: string;
  values: any;
  params?: any;
}) => {
  try {
    const request = await axiosInstance.post(url, { ...values });
    return request.data;
  } catch (error) {
    return error;
  }
};

export const patchApi = async ({
  url,
  values,
}: {
  url: string;
  values: string;
  params?: any;
}) => {
  try {
    const request = await axiosInstance.patch(url, { data: values });
    return request.data;
  } catch (error) {
    return error;
  }
};

const handleResponse = () => {};
