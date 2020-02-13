import React, { PureComponent } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { connect } from 'react-redux';
import { isEmpty } from 'lodash';
import { IntlProvider } from 'react-intl';
import config from '../languageProvider/config';
import AppLocale from '../languageProvider';
import { getCurrentLanguage } from '../languageProvider/config';
import { restoreData, storeData } from '../helpers/localStorageUtils';
import { getLangID, checkIsRefreshToken } from '../helpers/locationUtils';
import appActions from '../redux/app/actions';
import Root from '../containers/Root';

class PublicRoutes extends PureComponent {

	constructor(props) {
		super(props);

		const langID = getLangID(window.location.pathname);
		storeData('langID', langID);
		this.isRefreshToken = checkIsRefreshToken();
	}

	componentDidMount() {
		const { appStarted, appStart, changeLanguage } = this.props;
		changeLanguage(restoreData('langID') || config.defaultLanguage);
		if (!appStarted) {
			appStart(this.isRefreshToken);
		}
	}

	render() {
		const { history, isLoggedIn, langID } = this.props;
		const currentLanguage = getCurrentLanguage(langID);
		const { locale, messages } = AppLocale[currentLanguage.locale];

		const rootProps = { isLoggedIn };

		return (
			<IntlProvider locale={locale} messages={messages} key={locale}>
				<ConnectedRouter history={history}>
					<Switch>
						<Route path="/en" render={props => (<Root {...props} {...rootProps} />)}/>
						<Route path="/" render={(props) => (<Redirect to={{pathname: `/${config.defaultLocale}`}}/>)}/>
					</Switch>
				</ConnectedRouter>
			</IntlProvider>
		);
	}
}

export default connect(
	({ App }) => ({
		isLoggedIn: !isEmpty(App.get('token')),
		langID: App.get('langID'),
		appStarted: App.get('appStarted'),
	}), {
	changeLanguage: appActions.changeLanguage,
	appStart: appActions.appStart,
}
)(PublicRoutes);
