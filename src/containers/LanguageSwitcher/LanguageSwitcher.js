import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import { Select } from "antd";

import langConfig from "../../languageProvider/config";
import appActions from "../../redux/app/actions";
import { storeData } from "../../helpers/localStorageUtils";
import {
	makeLocalURLwithLocale,
	redirectLocal
} from "../../helpers/locationUtils";
import {
	Wrapper,
	OptionText,
	dropdownMenuClass,
	OptionContainer,
} from "./LanguageSwitcher.style";

const SelectOption = Select.Option;
const langList = langConfig.options;
const useRedirect = false;

class LanguageSwither extends Component {
	static propTypes = {
		useFlags: PropTypes.bool
	};
	static defaultProps = {
		useFlags: false
	};

	onChangeLanguage = value => {
		const { userChangeLanguage, isLoggedIn, changeLanguage, push } = this.props;
		if (isLoggedIn) {
			userChangeLanguage(value);
		}
		storeData("langID", value);
		changeLanguage(value);

		const newCurrentURL = makeLocalURLwithLocale(
			window.location.pathname,
			value
		);

		if (useRedirect) {
			redirectLocal(newCurrentURL);
		} else {
			push(newCurrentURL);
		}
	};

	renderOptions = () => {
		const options = langList.map(item => {
			const optionText = item.text;

			return (
				<SelectOption value={item.langID} key={item.langID}>
					<OptionContainer>
						<OptionText>{optionText}</OptionText>
					</OptionContainer>
				</SelectOption>
			);
		});

		return options;
	};

	render() {
		const { langID } = this.props;
		const options = this.renderOptions();
		return (
			<Wrapper id='langSwitcherContainer'>
				<div className='control'>
					<Select
						id='languageDropMenu'
						value={langID}
						dropdownClassName={dropdownMenuClass}
						getPopupContainer={() =>
							document.getElementById("langSwitcherContainer")
						}
						onChange={this.onChangeLanguage}
					>
						{options}
					</Select>
				</div>
			</Wrapper>
		);
	}
}

export default connect(
	({ App }) => ({
		isLoggedIn: !!App.get("authToken"),
		langID: App.get("langID")
	}),
	{
		changeLanguage: appActions.changeLanguage,
		userChangeLanguage: appActions.userChangeLanguage,
		userInfoMerge: appActions.userInfoMerge,
		push
	}
)(LanguageSwither);
