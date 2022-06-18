import { Animated } from "react-native";
import { OnboardingItemModel } from "../models/onboarding";

export interface OnboardingItemProps {
	data: OnboardingItemModel;
}

export interface OnboardingPaginatorProps {
	data: OnboardingItemModel[];
	scrollX: Animated.Value;
}

export interface NextButtonProps {
	percentage: number;
	scrollTo: () => void;
}
