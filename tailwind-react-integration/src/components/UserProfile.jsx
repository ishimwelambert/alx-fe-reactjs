const UserProfile = (props) => {
  return (
    <div className="bg-gray-100 p-8 max-w-sm mx-auto my-20 rounded-lg shadow-lg">
      <h2 className="text-blue-600 text-xl font-semibold">{props.name}</h2>
      <p className="mt-2">
        Age: <span className="font-bold">{props.age}</span>
      </p>
      <p className="mt-2">Bio: {props.bio}</p>
    </div>
  );
};

export default UserProfile;
