import {
  useConnectModal,
  useAccountModal,
  useChainModal,
} from '@rainbow-me/rainbowkit';
import "./modalHooks.css"
export const ModalHooks = () => {
  const { openConnectModal } = useConnectModal();
  const { openAccountModal } = useAccountModal();
  const { openChainModal } = useChainModal();
  return (
    <>
      <div className="hookscontainer">
        <div className="hooksheadingContainer">
          <h1 className='hooksheading'>Using modal hooks to open differen modals</h1>
        </div>
        <div className="buttonContainer">
      {openConnectModal && (
        <button onClick={openConnectModal} type="button" className='openConnectModalButton'>
          Open Connect Modal
        </button>
      )}
      {openAccountModal && (
        <button onClick={openAccountModal} type="button" className='openAccountModalButton'>
          Open Account Modal
        </button>
      )}
      {openChainModal && (
        <button onClick={openChainModal} type="button" className='openChainModalButton'>
          Open Chain Modal
        </button>
          )}
          </div>
        </div>
    </>
  );
};