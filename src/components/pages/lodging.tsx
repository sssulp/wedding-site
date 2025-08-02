import { MdHotel } from 'react-icons/md';

const Lodging = () => {
  return (
    <>
      <div>
        <div>
          <p>Lodging, room blocks, etc.</p>
        </div>
        <div>
          <p>
            Hilton Garden Inn
            <MdHotel />
          </p>
          {/* to do: add address for the PRIMARY hotel + hotel room block */}
          {/* to do: provide secondary option for hotel and stay */}
        </div>
      </div>
    </>
  );
};

export default Lodging;
