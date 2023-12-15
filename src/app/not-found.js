import { Button } from "@mui/material";
import Link from "next/link";

const NotFound = () => {
    return (
        <main className="h-screen flex items-center justify-center">
            <div className="text-center">
                <h2 className="text-5xl font-bold">Not Found</h2>
                <p>Could not find requested resource</p>
                <Link href="/"><Button variant="outlined">Return Home</Button></Link>
            </div>
        </main>
    );
};

export default NotFound;