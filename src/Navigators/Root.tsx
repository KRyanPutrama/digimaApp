import * as React from 'react';
import {
  CommonActions,
  NavigationContainerRef,
} from '@react-navigation/native';

type RoutesType = {
  name: string;
  params?: Record<string, any>;
};

export const navigationRef = React.createRef<NavigationContainerRef>();

export function navigate(name: string, params?: any | null) {
  navigationRef.current?.navigate(name, params);
}

export function navigateBack(cannotGobackCallback?: () => void) {
  if (navigationRef.current?.canGoBack()) {
    navigationRef.current?.goBack();
  } else {
    cannotGobackCallback?.();
  }
}

export function navigateAndReset(routes: RoutesType[], index = 0) {
  navigationRef.current?.dispatch(CommonActions.reset({ index, routes }));
}
