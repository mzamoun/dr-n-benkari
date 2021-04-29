s=""
i=0
for f in img*; do 
	((i++))
	v=","
	if ((i==1)); then v=""; fi 
	s="$s$v 'res/$f'"
done

echo "$s"


