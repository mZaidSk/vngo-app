export function NGOStats({ stats }: any) {
    console.log(stats);
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
                <p className="text-xl font-bold">
                    {stats?.activities?.length || 0}
                </p>
                <p className="text-sm text-muted-foreground">
                    Activities Conducted
                </p>
            </div>

            <div>
                <p className="text-xl font-bold">
                    {new Date().getFullYear() - stats?.founded_year || 0}
                </p>
                <p className="text-sm text-muted-foreground">
                    Years of Operation
                </p>
            </div>

            <div>
                <p className="text-xl font-bold">
                    {stats?.focus_areas?.split(",").length || 0}
                </p>
                <p className="text-sm text-muted-foreground">Focus Areas</p>
            </div>
        </div>
    );
}
