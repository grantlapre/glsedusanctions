import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const navBut = () => {
    return(
        <Button component={Link} to="/glsedufraud">
  Sanctions
</Button>
    );

};

export default navBut;