




import React, { useState } from 'react';
import { Card, Button, Modal, Row, Col } from 'react-bootstrap';


const InvestmentCard = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [walletAddresses, setWalletAddresses] = useState({
    plan1: [
      { coin: 'Bitcoin', address: "bc1q2wrnlu2hdw9r2khl7kgv79c85varuflsdgxt40" },
      { coin: 'Ethereum', address: "0x34e9B0a47904BE88ce734C070B5675f2A4578c2B" },
      { coin: 'XRP', address: "0x34e9B0a47904BE88ce734C070B5675f2A4578c2B" },
    ],
    plan2: [
      { coin: 'Bitcoin', address: "bc1q2wrnlu2hdw9r2khl7kgv79c85varuflsdgxt40" },
      { coin: 'Ethereum', address: "0x34e9B0a47904BE88ce734C070B5675f2A4578c2B" },
      { coin: 'XRP', address: "0x34e9B0a47904BE88ce734C070B5675f2A4578c2B" },
    ],
    plan3: [
      { coin: 'Bitcoin', address: "bc1q2wrnlu2hdw9r2khl7kgv79c85varuflsdgxt40" },
      { coin: 'Ethereum', address: "0x34e9B0a47904BE88ce734C070B5675f2A4578c2B" },
      { coin: 'XRP', address: "0x34e9B0a47904BE88ce734C070B5675f2A4578c2B" },
    ]
  });

  const handleShowModal = (plan) => {
    setSelectedPlan(plan);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const copyToClipboard = (address) => {
    navigator.clipboard.writeText(address)
      .then(() => alert('Wallet address copied to clipboard'))
      .catch((error) => console.error('Could not copy text: ', error));
  };

  return (
    <div className="">
    <Card className='p-5 mt-4 border-0' style={{background:"#ccf35b"}}>
      <h5 clasName="mx-auto " style={{fontStyle:"italic"}}>Please Select Any Of Our Investment Plans</h5>
      <Row className="p-3 p-5 mt-4">
        <Col md={4} className="">
          <Card className="shadow p-3 mb-5 bg-warning rounded">
            <Card.Body>
              <div className="investment-plan fw-bold text-center">
                <h4 className="fw-bold">Starter</h4>
                <p>Type: Crypto</p>
                <p>Percentage: 30%</p>
                <p>$500-$4000</p>
                <p>Withdrawal in 14 days</p>
                <Button className='bg-warning fw-bold text-black border border-white' onClick={() => handleShowModal('plan1')}>View Wallet Addresses</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="">
          <Card className="shadow p-3 mb-5 bg-warning rounded">
            <Card.Body>
              <div className="investment-plan fw-bold text-center">
                <h4 className="fw-bold">Standard</h4>
                <p>Type: Crypto</p>
                <p>Percentage: 30%</p>
                <p>$4000-$7000</p>
                <p>Withdrawal in 10 days</p>
                <Button className='bg-warning fw-bold text-black border border-white' onClick={() => handleShowModal('plan1')}>View Wallet Addresses</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="">
          <Card className="shadow p-3 mb-5 bg-warning rounded">
            <Card.Body>
              <div className="investment-plan fw-bold text-center">
                <h4>Premium</h4>
                <p>Type: Crypto</p>
                <p>Percentage: 30%</p>
                <p>$8000 and above</p>
                <p>Withdrawal in 7 days</p>
                <Button className='bg-warning fw-bold text-black border border-white' onClick={() => handleShowModal('plan1')}>View Wallet Addresses</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        {/* Add more columns with different investment plans */}
      </Row>
      
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Wallet Addresses</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="fw-italic bg-light p-2 rounded text-warning">Please copy the wallet address below and make your payment</p>
          {walletAddresses[selectedPlan]?.map(({ coin, address }, index) => (
            <div key={index}>
              <p>{coin}: {address}</p>
              <Button variant="warning" className="text-white" onClick={() => copyToClipboard(address)}>Copy to Clipboard</Button>
            </div>
          ))}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="warning" className="text-white" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Card>
    
    </div>
  );
}

export default InvestmentCard;

