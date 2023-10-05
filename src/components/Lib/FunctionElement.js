export const InputFist = (type, holder, ref) => {
  return (
    <input
      className="DAT_Setting-Number-Row1-Item1"
      placeholder={holder}
      type={type}
      ref={ref}
    />
  );
};
export const Input = (type, holder, ref) => {
  return <input placeholder={holder} type={type} ref={ref} />;
};

export const Button = (Function, Text) => {
  return <button onClick={(e) => Function(e)}>Chọn</button>;
};

export const Span = (Text) => {
  return <span>{Text}</span>;
};
