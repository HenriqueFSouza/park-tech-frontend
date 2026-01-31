import { Skeleton } from "@/components/ui/skeleton";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import type { User } from "@/types/users.types";
import { formatDateToDMY } from "@/utils/formaters";

const columns = ["Nome", "Email", "Cargo", "Data de cadastro"];

interface UsersTableProps {
  data: User[];
  isLoading: boolean;
}

export function UsersTable({ data, isLoading }: UsersTableProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow className="bg-muted shadow-sm">
          {columns.map((item, index) => (
            <TableHead
              key={index}
              className="text-[12px] font-semibold text-muted-foreground px-4 py-3 text-left uppercase"
            >
              {item}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {isLoading &&
          [...Array(5)].map((_, i) => (
            <tr key={i} className="border-t border-input">
              {[...Array(4)].map((_, j) => (
                <td key={j} className="px-4 py-4">
                  <Skeleton
                    className="h-4 rounded"
                    style={{ width: j === 6 ? "80px" : "100px" }}
                  />
                </td>
              ))}
            </tr>
          ))}

        {!isLoading &&
          data.map((user) => (
            <TableRow key={user.id} className="[&_td]:p-4">
              <TableCell className="font-semibold">{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell>{formatDateToDMY(user.createdAt)}</TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
}
