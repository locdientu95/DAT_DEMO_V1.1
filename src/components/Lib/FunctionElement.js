export const Box = (data) => {
  return (
    <select>
      {data.map((item, index) => {
        return (
          <option key={index} value={item}>
            {item}
          </option>
        );
      })}
    </select>
  );
};

export const BoxRef = (data, ref) => {
  return (
    <select ref={ref}>
      {data.map((item, index) => {
        return (
          <option key={index} value={item}>
            {item}
          </option>
        );
      })}
    </select>
  );
};

export const BoxOnchange = (data, handleBox) => {
  return (
    <select onChange={(e) => handleBox(e)}>
      {data.map((item, index) => {
        return (
          <option key={index} value={item}>
            {item}
          </option>
        );
      })}
    </select>
  );
};

export const InputFist = (type, holder, ref) => {
  return (
    <input
      className="DAT_Setting-Number-Row-Item1"
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
  return <button onClick={(e) => Function(e)}>{Text}</button>;
};

export const Span = (Text) => {
  return <span>{Text}</span>;
};

export const Select = (Function, Text, ref, value) => {
  return (
    <select onChange={(e) => Function(e)} ref={ref}>
      <option value={value}>{Text}</option>
    </select>
  );
};
