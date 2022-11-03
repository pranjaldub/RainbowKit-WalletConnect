import { useAddRecentTransaction } from '@rainbow-me/rainbowkit';

const AddRecentTransaction =() => {
  const addRecentTransaction = useAddRecentTransaction();

  return (
    <button
      onClick={() => {
        addRecentTransaction({
          hash: '0x90E054E52072353b7607581B8bcb537C84D401f3',
            description: 'transaction',
          confirmations:100
        });
      }}
    >
      Add recent transaction
    </button>
  );
};

export default AddRecentTransaction