import React, { useEffect, useState } from 'react'
import { Button, Typography, Menu, Avatar } from 'antd';
import { Link } from 'react-router-dom';

import icon from '../images/cryptocurrency.png'
import { BulbOutlined, FundOutlined, HomeOutlined, MenuOutlined, MoneyCollectOutlined } from '@ant-design/icons';



const Navbar = () => {
    const [activeMenu, setActiveMenu] = useState(true);
    const [screenSzie, setScreenSzie] = useState(null);

    useEffect(() => {
        const handleSize = () => setScreenSzie(window.innerWidth);

        window.addEventListener('resize', handleSize)

        return () => window.removeEventListener('resize', handleSize);
    }, []);

    useEffect(() => {
        if (screenSzie < 768) {
            setActiveMenu(false)
        } else {
            setActiveMenu(true)
        }
    }, [screenSzie])

    return (
        <div className='nav-container'>
            <div className="logo-container">
                <Avatar src={icon} size='large' />
                <Typography.Title level={2} className='logo'>
                    <Link to='/'>Cryptoverse</Link>
                </Typography.Title>

                <Button className='menu-control-container' onClick={() => setActiveMenu(!activeMenu)}>
                    <MenuOutlined />
                </Button>
            </div>
            {activeMenu && (
                <Menu theme='dark'>
                    <Menu.Item icon={<HomeOutlined />}>
                        <Link to='/'>Home</Link>
                    </Menu.Item>
                    <Menu.Item icon={<FundOutlined />}>
                        <Link to='/cryptocurrencies'>Cryptocurrencies</Link>
                    </Menu.Item>
                    <Menu.Item icon={<MoneyCollectOutlined />}>
                        <Link to='/exchanges'>Exchanges</Link>
                    </Menu.Item>
                    <Menu.Item icon={<BulbOutlined />}>
                        <Link to='/news'>News</Link>
                    </Menu.Item>
                </Menu>
            )}

        </div>
    )
}

export default Navbar