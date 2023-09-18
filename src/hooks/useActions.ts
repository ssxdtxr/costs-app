import {useDispatch} from "react-redux";
import {useMemo} from "react";
import {bindActionCreators} from "@reduxjs/toolkit";
import {notificationsActions} from "@/store/notifications/notifications.slice.ts";

const rootActions = {
  ...notificationsActions
}
export const useActions = () => {
  const dispatch = useDispatch()

  return useMemo(() =>
    bindActionCreators(rootActions, dispatch), [dispatch])
}