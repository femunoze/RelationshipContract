const RelationshipContract = () => {
  const [boyfriendSignature, setBoyfriendSignature] = useState('');
  const [girlfriendSignature, setGirlfriendSignature] = useState('');
  const [boyfriendAgrees, setBoyfriendAgrees] = useState(false);
  const [girlfriendAgrees, setGirlfriendAgrees] = useState(false);
  const [boyfriendSigned, setBoyfriendSigned] = useState(false);
  const [girlfriendSigned, setGirlfriendSigned] = useState(false);
  const [contractSigned, setContractSigned] = useState(false);

  const handleBoyfriendSign = () => {
    if (boyfriendSignature && boyfriendAgrees) {
      setBoyfriendSigned(true);
      if (girlfriendSigned) {
        setContractSigned(true);
      }
    }
  };

  const handleGirlfriendSign = () => {
    if (girlfriendSignature && girlfriendAgrees) {
      setGirlfriendSigned(true);
      if (boyfriendSigned) {
        setContractSigned(true);
      }
    }
  };

  const ContractContent = () => (
    <div className="prose max-w-none">
      <h1 className="text-3xl font-bold text-center mb-8">RELATIONSHIP CONTRACT</h1>
      
      <section className="mb-6">
        <h2 className="text-xl font-semibold">I. THE COUPLE</h2>
        <p>This Relationship Contract ("Agreement") is dated November 11 2024, and is written for the mutual benefit of the Couple. Furthermore, this Agreement is solely meant to establish rules and boundaries for a loving and fulfilling relationship.</p>
        
        <p>
          <strong>Boyfriend:</strong> Felipe<br />
          <strong>Girlfriend:</strong> Elizabeth Cristina aka "La Cris"
        </p>

        <p>Boyfriend and Girlfriend are each referred to herein as a "Partner" and, collectively, as the "Couple."</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">II. EXCLUSIVITY</h2>
        <p>The Couple agrees to be in an exclusive relationship. This means each Partner agrees to be faithful in a sexual and emotional manner. No other sexual partners are allowed.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">III. LIVING ARRANGEMENTS</h2>
        <p>Each Partner agrees to live in their own residence and be responsible for their own living expenses.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">IV. INCOME</h2>
        <p>The Couple agrees that each Partner's income is their own.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">V. NEEDS</h2>
        <p>The Couple agrees to meet the following needs:</p>
        <div className="ml-6">
          <p>a.) Date Night: The Couple agrees to have 3 night(s) per month that are "distraction free" with all attention being given to the other person.</p>
          <p>b.) Romantic Engagement: The Couple agrees to engage in an intimate and romantic activity at least 3 time(s) per month.</p>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">VI. TERMINATION</h2>
        <p>This Agreement shall continue until one Partner gives notice to the other of their intention to break it up. In such event, if there are any financial obligations under this Agreement, each Partner shall remain liable to such obligations until the end of its term or 30 days, whichever is later (for example, if a partner has agreed to pay half the rent in a lease, said partner is obligated to keep paying until the end of the lease term). Otherwise, if a partner is paying the other an allowance or other obligation with no end date, it can be canceled within 30 days.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">VII. BANK ACCOUNTS</h2>
        <p>In regard to bank accounts, the Couple agree to each have their own separate bank accounts where each shall keep their money. There is no requirement under this Agreement to share a bank account or funds with their Partner.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">VIII. MUTUAL RESPECT</h2>
        <p>To maintain a fair and transparent relationship, the Couple agrees to the following: (Initial where applicable)</p>
        <div className="ml-6">
          <p>a.) Honesty: The Couple agrees to maintain a radically honest relationship and to always say what is on their mind. Each Partner agrees to listen to such honesty and not judge the other person for their views.</p>
          <p>b.) Political Views: The Couple agrees to listen and respect each other's political views. If either Partner does not want to engage in political conversation, they can make this declaration at any time and must be respected by the other Partner.</p>
          <p>c.) Judgment-Free: Each Partner agrees to always listen and give advice that is in the best interest of the other Partner. Especially in public settings, each Partner agrees to make comments that present the other in a good and positive manner and free of embarrassment or negativity.</p>
          <p>d.) Family: The Couple agrees to spend time with each Partner's respective family. This is especially enforced around holidays and times of the year where each Partner does not have other commitments.</p>
          <p>e.) Disputes: Each Partner promises to always make a good faith effort to resolve any dispute or issue in an amicable manner. Either Party has the option to take a "time out" and remove themselves from the situation. If a "time out" occurs, each Partner agrees to be quiet and give the other their personal space financial and Emotional.</p>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">IX. LIABILITY</h2>
        <p>The Couple agrees that each Partner shall be legally liable to all terms of this Agreement, including, but not limited to, financial commitments and emotional distress.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">X. ADDITIONAL TERMS</h2>
        <p>Mr. Felipe cannot be denied access to the MUBI service in the event of a breakup.</p>
      </section>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {!contractSigned ? (
        <>
          <ContractContent />
          
          <div className="mt-12 space-y-8">
            <div className="p-6 border rounded-lg space-y-4">
              <h3 className="text-lg font-semibold">Boyfriend Signature</h3>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="boyfriend-name">Full Name</Label>
                  <Input
                    id="boyfriend-name"
                    value={boyfriendSignature}
                    onChange={(e) => setBoyfriendSignature(e.target.value)}
                    placeholder="Type your full name"
                    className="mt-1"
                    disabled={boyfriendSigned}
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="boyfriend-agree"
                    checked={boyfriendAgrees}
                    onCheckedChange={setBoyfriendAgrees}
                    disabled={boyfriendSigned}
                  />
                  <label htmlFor="boyfriend-agree" className="text-sm">
                    I have read and agree to the terms of this contract
                  </label>
                </div>
                <Button
                  onClick={handleBoyfriendSign}
                  disabled={!boyfriendSignature || !boyfriendAgrees || boyfriendSigned}
                >
                  {boyfriendSigned ? "Contract Signed" : "Sign Contract"}
                </Button>
                {boyfriendSigned && (
                  <Alert>
                    <AlertDescription>
                      Contract signed by {boyfriendSignature} on {new Date().toLocaleDateString()}
                    </AlertDescription>
                  </Alert>
                )}
              </div>
            </div>

            <div className="p-6 border rounded-lg space-y-4">
              <h3 className="text-lg font-semibold">Girlfriend Signature</h3>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="girlfriend-name">Full Name</Label>
                  <Input
                    id="girlfriend-name"
                    value={girlfriendSignature}
                    onChange={(e) => setGirlfriendSignature(e.target.value)}
                    placeholder="Type your full name"
                    className="mt-1"
                    disabled={girlfriendSigned}
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="girlfriend-agree"
                    checked={girlfriendAgrees}
                    onCheckedChange={setGirlfriendAgrees}
                    disabled={girlfriendSigned}
                  />
                  <label htmlFor="girlfriend-agree" className="text-sm">
                    I have read and agree to the terms of this contract
                  </label>
                </div>
                <Button
                  onClick={handleGirlfriendSign}
                  disabled={!girlfriendSignature || !girlfriendAgrees || girlfriendSigned}
                >
                  {girlfriendSigned ? "Contract Signed" : "Sign Contract"}
                </Button>
                {girlfriendSigned && (
                  <Alert>
                    <AlertDescription>
                      Contract signed by {girlfriendSignature} on {new Date().toLocaleDateString()}
                    </AlertDescription>
                  </Alert>
                )}
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="space-y-8">
          <Alert className="bg-green-100">
            <AlertDescription className="text-center font-semibold text-xl">
              Contract Successfully Executed!
            </AlertDescription>
          </Alert>
          
          <ContractContent />
          
          <div className="mt-8 p-6 border rounded-lg space-y-4">
            <h3 className="text-lg font-semibold">Contract Signatures</h3>
            <div className="space-y-4">
              <Alert>
                <AlertDescription>
                  Boyfriend: {boyfriendSignature}<br/>
                  Signed on: {new Date().toLocaleDateString()}
                </AlertDescription>
              </Alert>
              <Alert>
                <AlertDescription>
                  Girlfriend: {girlfriendSignature}<br/>
                  Signed on: {new Date().toLocaleDateString()}
                </AlertDescription>
              </Alert>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RelationshipContract;