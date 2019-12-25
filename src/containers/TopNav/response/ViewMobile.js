import React, { Component } from 'react';
import { Drawer, Icon, } from 'antd';
import { isEmpty } from 'lodash';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { makeLocalURLwithLocale, } from "../../../helpers/locationUtils";
import headerActions from '../../../redux/header/actions'
import actions from '../../../redux/app/actions';
import logomob from '../../../images/logomob.png'
import menuicon from '../../../images/menuicon.png'
import { Logo, Wrapper, DrawerLink, } from './ViewMobile.style';
import langConfig from "../../../languageProvider/config";


class ViewMobile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            show: false
        };
    }

    toggleDrawer = () => {
        const { visible } = this.state;
        this.setState({ visible: !visible });
    }

    onClose = () => {
        this.setState({
            visible: !this.state.visible,
        });
    };


    renderMenuItems = () => {
        const { links, langID } = this.props;
        if (!links) return;
        const menuItems = links.map((link, index) => {
            const linkURL = makeLocalURLwithLocale(link.url, langID);

            let name = link.name.props.id.slice(7);
            let part = name[0].toUpperCase() + name.slice(1, name.length);

            return (
                <p key={link.id}>
                    <DrawerLink
                        to={linkURL}
                        isActive={() => link.active}
                        onClick={() => this.onClickMenuItem(index)}
                    >
                        {part}
                    </DrawerLink>
                </p>
            );
        });
        return menuItems;
    }



    renderOptions = () => {
        const langList = langConfig.options;
        const options = langList.map(item => {
            return (
                <p key={item.langID} title={item.text} > {item.text}</ p>
            );
        });
        return options;
    };

    handleLang = () => {
        this.setState({
            show: !this.state.show
        })
    }

    onClooseSecond = () => {
        this.setState({
            show: false,
            visible: false,
        })
    }

    render() {
        const { langID } = this.props;
        const { visible } = this.state;
        const menuItems = this.renderMenuItems();

        return (
            <Wrapper>
                <Link to={makeLocalURLwithLocale('/', langID)}>
                    <Logo src={logomob} title="Makery" className="logo" alt="Logo" />
                </Link>

                <div className="menu">
                    <img src={menuicon} onClick={this.toggleDrawer} alt="menu icon" />
                </div>

                <Drawer
                    placement="right"
                    closable={false}
                    onClose={this.onClose}
                    visible={visible}
                >
                    <div className="cross">
                        <Icon type="close" onClick={this.onClose} />
                    </div>
                    {menuItems}
                    {/* <p className="plyo_style" onClick={this.handleLang}>Language</p> */}
                </Drawer>

                {/* <Drawer
                    placement="right"
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.show}
                >
                    <div className="top_list">
                        <Icon type="arrow-left" onClick={this.handleLang} />
                        <Icon type="close" onClick={this.onClooseSecond} />
                    </div>
                    <div className="language_names">
                        {options}
                    </div>
                </Drawer> */}
            </Wrapper>
        );
    }
}

export default connect(
    ({ App, Header }) => ({
        isLoggedIn: !isEmpty(App.get('authToken')),
        userInfo: App.get('userInfo'),
        themeName: App.get('theme').name,
        langID: App.get('langID'),
        loginModalVisible: App.get('loginModalVisible'),
        links: Header.get('items'),
    }), {
    dataSet: headerActions.dataSet,
    setLoginVisibility: actions.setLoginVisibility,
})(ViewMobile);
