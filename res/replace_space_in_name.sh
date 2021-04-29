for f in img*; do 
	g=$(echo $f | sed 's/ /_/g;s/JPG/jpg/g'); 
	if [ "$f" != "$g" ]; then 
		f2=$(echo $f | sed 's/ /\\ /g');   
		#echo "$f2 -> $g"; 
		echo "mv $f2 $g"; 
	fi
done


