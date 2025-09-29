
interface Props {
    title: string
}

export default function CustomDivider({title}: Props) {
  return (
    <div className="flex align-items-center justify-content-center mb-6">
        <div
          className="flex align-items-center justify-content-center"
          style={{
            background: "#ffffff",
            padding: "0.5rem 2rem",
            borderRadius: "2rem",
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
          }}
        >
          <span
            className="pi pi-users"
            style={{
              marginRight: "0.5rem",
              fontSize: "1.2rem",
              color: "#533630",
            }}
          />
          <span
            style={{ fontWeight: "bold", fontSize: "1.5rem", color: "#533630" }}
          >
            {title}
          </span>
        </div>
      </div>
  );
}
