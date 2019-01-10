import React from 'react';
import UserLayout from '../../../hoc/user';
import ManageBrands from './manage_brands';
import ManageAccesories from './manage_accesories';

const ManageCategories = () => {
    return (
        <UserLayout>
            <ManageBrands/>
            <ManageAccesories/>
        </UserLayout>
    );
};

export default ManageCategories;