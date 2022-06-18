import "styled-components";
import Fonts from "./fonts";
import Colors from "./colors";

/*eslint-disable*/
declare module "styled-components" {
	type ThemeType = typeof Fonts & typeof Colors;

	export interface DefaultTheme extends ThemeType {}
}
/*eslint-enable*/
