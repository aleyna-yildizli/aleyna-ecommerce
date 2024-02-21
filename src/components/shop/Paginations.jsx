import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

export default function Paginations() {
    return (
        <div className="flex justify-center">
            <Pagination aria-label="Page navigation example" size="lg" >
                <PaginationItem>
                    <PaginationLink first href="#" className="pagination-link-first">First</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#" className="paginations-1-3-Next">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#" className="pagination-link-2">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#" className="paginations-1-3-Next">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#" className="paginations-1-3-Next" next>Next</PaginationLink>
                </PaginationItem>
            </Pagination>
        </div>
    )
}