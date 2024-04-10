// SidebarLogin.tsx
"use client";
import React, { useState } from 'react';
import styles from './SidebarLogin.module.css'; // 使用 CSS Modules
import Button, { ButtonVariant } from '@/components/common/Button';
import { FaGithub } from 'react-icons/fa';

type SidebarLoginProps = {
  // 这里可以根据需要定义更多的props
};

const SidebarLogin: React.FC<SidebarLoginProps> = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);

  
  };
  console.log('isOpen', isOpen);

  return (
    <div>
      <button onClick={toggleSidebar} className={styles.toggleButton}>登录</button>
      {true && (
        <div className={`${styles.overlay} ${isOpen ? styles.open : ''}`} onClick={toggleSidebar}>
          <div className={`${styles.sidebar} ${isOpen && styles.open} `} onClick={(e) => e.stopPropagation()}>
            <h2>登录</h2>
            {/* 登录表单和其他内容 */}
            <input type="text" placeholder="用户名" className={styles.input} />
            <input type="password" placeholder="密码" className={styles.input} />
            <Button variant={ButtonVariant.Outline} className={styles.loginButton} icon={FaGithub}>
                Sign in with GitHub
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SidebarLogin;
