import React from 'react';
import Card from './card';

//recieve props cause we get the data from the server
const CardBlock = (props) => {

    const renderCards = () =>( 
        props.list ?
            props.list.map((card,i)=>(
                    <Card
                        key={i}
                        {...card}
                    />
            ))
        :null
    )
    
    return (
        <div className="card_block">
            <div className="container">
                {
                    props.title ?
                        <div className="title">
                            {props.title}
                        </div>
                    :null
                }
                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap'
                }}>
                    { renderCards(props.list) }
                </div>
            </div>
        </div>
    );
};

export default CardBlock;