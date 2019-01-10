import React, { Component } from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';

class Paypal extends Component {
    render() {

        const onSuccess = (payment) => {
            //console.log(JSON.stringify(payment))
            this.props.onSuccess(payment)
        }

        const onCancel = (data) => {
            console.log(JSON.stringify(data))
        }

        const onError = (err) => {
            console.log(JSON.stringify(err))
        }

        let env = 'sandbox';
        let currency= 'USD';
        let total = this.props.toPay;

        const client = {
            sandbox:'Aej_LCcFM5n6Rbr989baC-RJs1bq7VD5KBiB3IJaVUu49U2NgCuYXsrntl7RF4KuTk4ybtDjVEQnQ6qE',
            production:''
        }

        return (
            <div>
                <div>
                    <PaypalExpressBtn
                        env={env}
                        client={client}
                        currency={currency}
                        total={total}
                        onError={onError}
                        onSuccess={onSuccess}
                        onCancel={onCancel}
                        style={{
                            size: 'large',
                            color: 'blue',
                            shape: 'rect',
                            label: 'checkout'
                        }}
                    />
                </div>
            </div>
        );
    }
}

export default Paypal;