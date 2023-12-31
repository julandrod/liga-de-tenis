import { fetchInfo } from "@/libs/data";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import ButtonLink from "@/components/ButtonLink";
import UsersContainer from "@/components/UsersContainer";

const UsersPage = async ({ searchParams }) => {
  const page = searchParams?.page || 1;
  const session = await getServerSession(authOptions);
  const accessToken = session?.user.token;
  const role = session?.user.role;

  const {
    body: { users, pageSize, totalCount },
  } = await fetchInfo({
    accessToken,
    page,
    endpoint: "users",
  });

  if (role === "PLAYER") {
    return (
      <div className="px-8 py-3 mx-6 my-2 text-2xl font-bold">
        <h1>No tienes permiso para ver esta pagina</h1>
        <ButtonLink link="/" text="Ir al inicio" />
      </div>
    );
  }

  return (
    <UsersContainer
      title="Usuarios"
      users={users}
      totalCount={totalCount}
      pageSize={pageSize}
    />
  );
};

export default UsersPage;
