import PropTypes from "prop-types";

export const InputDiv = ({ labelName, placeHolder, onChange }) => {
  return (
    <>
      <div className="flex flex-col gap-1">
        <label className="text-lg">{labelName}</label>
        <input placeholder={placeHolder} onChange={onChange} className="p-2 rounded-sm bg-black-800 border border-grey-800" />
      </div>
    </>
  );
};

InputDiv.propTypes = {
  labelName: PropTypes.string,
  placeHolder: PropTypes.string,
  onChange: PropTypes.func,
};

export const InputSelectDiv = ({onChange}) => {
  return (
    <>
      <div >
        <label className="text-lg">Role - </label>
        <select defaultValue="user" onChange={onChange} className="bg-black-800 border border-grey-800 rounded px-1 py-0.5">
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
      </div>
    </>
  );
};

InputSelectDiv.propTypes = {
  onChange: PropTypes.func,
};