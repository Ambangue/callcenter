import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

interface Candidate {
  id: number;
  name: string;
  email: string;
  phone: string;
  status: string;
  lastContact: string;
}

interface CandidateTableProps {
  candidates: Candidate[];
}

export const CandidateTable = ({ candidates }: CandidateTableProps) => {
  console.log("Rendering CandidateTable with", candidates.length, "candidates");
  
  return (
    <div className="border rounded-md">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nom</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Téléphone</TableHead>
            <TableHead>Statut</TableHead>
            <TableHead>Dernier contact</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {candidates.map((candidate) => (
            <TableRow key={candidate.id}>
              <TableCell>{candidate.name}</TableCell>
              <TableCell>{candidate.email}</TableCell>
              <TableCell>{candidate.phone}</TableCell>
              <TableCell>{candidate.status}</TableCell>
              <TableCell>{candidate.lastContact}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};