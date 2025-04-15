export function NGOStats() {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
                <p className="text-xl font-bold">156</p>
                <p className="text-sm text-muted-foreground">
                    Activities Conducted
                </p>
            </div>
            <div>
                <p className="text-xl font-bold">2,500+</p>
                <p className="text-sm text-muted-foreground">
                    Active Volunteers
                </p>
            </div>
            <div>
                <p className="text-xl font-bold">10</p>
                <p className="text-sm text-muted-foreground">
                    Years of Operation
                </p>
            </div>
            <div>
                <p className="text-xl font-bold">5</p>
                <p className="text-sm text-muted-foreground">Focus Areas</p>
            </div>
        </div>
    );
}
