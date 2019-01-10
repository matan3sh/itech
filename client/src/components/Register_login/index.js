import React from 'react';
import MyButton from '../utils/button';
import Login from './login';

const RegisterLogin = () => {
    return (
        <div className="page_wrapper">
            <div className="container">
                <div className="register_login_container">
                    <div className="left">
                        <h1>New Customers</h1>
                        <p>Lorem ipsum dolor sit amet, illud feugiat liberavisse ut vix, qui solum facer id. Inimicus dignissim ut mei, 
                            vivendo percipitur pri ut. Ei vim consul laudem, pri alii esse modus ut. Has ad causae discere adversarium, 
                            id minimum lobortis mei, ad ius modus sadipscing. Nostrum pericula definitionem ei cum, 
                            exerci vituperatoribus an mel.</p>
                            <MyButton
                                type="default"
                                title="Create An Account"
                                linkTo="/register"
                                addStyles={{
                                    margin: '10px 0 0 0'
                                }}
                            />
                    </div>
                    <div className="right">
                        <h2>Registered Customers</h2>
                        <p>If you have an account please log in.</p>
                        <Login/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterLogin;