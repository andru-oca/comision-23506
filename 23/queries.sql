use	libreria_23506;


SELECT *
FROM libreria_23506.AUTOR;

INSERT INTO libreria_23506.AUTOR
VALUES
(40,'German');

UPDATE libreria_23506.AUTOR
SET NOMBRE = 'Dracula'
WHERE NOMBRE LIKE 'Vladamir';


SET FOREIGN_KEY_CHECKS = 0;

DELETE FROM libreria_23506.AUTOR
WHERE NOMBRE LIKE 'G%';

DELETE FROM libreria_23506.AUTOR ;

-- PEDIDOS DESDE EL AREA 

	-- TOTAL DE CANTIDAD DE VENTAS POR AÑO
    -- LIBRO CON MAYOR CANTIDAD DE VENTAS
	-- DADO EL MODELO QUIERO SABER QUIENES COMPRARON EN EL ULTIMO AÑO
	-- CANTIDAD DE LIBROS POR AUTOR

-- CANTIDAD DE VENTAS POR AÑO 
-- TOTAL DE VENTAS POR AÑO

	SELECT *
    FROM libreria_23506.VENTA
    LIMIT 10;

	SELECT
	
		YEAR(FECHA_VENTA) AS ANIO
	,	COUNT(1) AS CANTIDAD_VENTAS
    
	FROM libreria_23506.VENTA
	GROUP BY YEAR(FECHA_VENTA)
    ORDER BY ANIO DESC
    ;
    
    
    
	SELECT 
		YEAR(FECHA_VENTA) AS ANIO
	,	SUM(PRECIO_VENTA) AS TOTAL_VENTA

	FROM libreria_23506.VENTA
	GROUP BY YEAR(FECHA_VENTA)
	ORDER BY TOTAL_VENTA DESC
	;



    -- LIBRO CON MAYOR CANTIDAD DE VENTAS
    
-- SUBQUERY    
	SELECT 
		CODIGO_EJEMPLAR
    FROM	
    (
		SELECT 
			CODIGO_EJEMPLAR
		,	COUNT(1) AS CANT_VENTA

		FROM libreria_23506.VENTA
		GROUP BY CODIGO_EJEMPLAR
		ORDER BY CANT_VENTA DESC
		LIMIT 1
    ) AS SUB ;


SELECT * 
FROM libreria_23506.EJEMPLAR;

SELECT 
	-- CODIGO_LIBRO
    *
FROM libreria_23506.EJEMPLAR
	WHERE 
    CODIGO_EJEMPLAR = 
		(	SELECT 
			CODIGO_EJEMPLAR
			FROM	
				(
					SELECT 
						CODIGO_EJEMPLAR
					,	COUNT(1) AS CANT_VENTA

					FROM libreria_23506.VENTA
					GROUP BY CODIGO_EJEMPLAR
					ORDER BY CANT_VENTA DESC
					LIMIT 1
				) AS SUB 
);


-- CUAL ES EL LIBRO 45 ?  VEAMOS EN LA TABLA LIBRO
SELECT *
FROM libreria_23506.LIBRO;

-- PODRIAMOS USAR UN EXISTS
SELECT 
    *
FROM libreria_23506.LIBRO AS l
WHERE EXISTS
(
		SELECT 
			CODIGO_LIBRO
		FROM libreria_23506.EJEMPLAR AS e
			WHERE 
			CODIGO_EJEMPLAR = 
				(	SELECT 
					CODIGO_EJEMPLAR
				FROM	
				(
				SELECT 
					CODIGO_EJEMPLAR
				,	COUNT(1) AS CANT_VENTA

				FROM libreria_23506.VENTA
				GROUP BY CODIGO_EJEMPLAR
				ORDER BY CANT_VENTA DESC
				LIMIT 1
				) AS SUB 
			) 
            AND 
            CODIGO_LIBRO = l.CODIGO_LIBRO
);


-- DADO EL MODELO QUIERO SABER LOS USUARIOS QUE COMPRARON EN EL ULTIMO AÑO

SELECT 
	*
	FROM (SELECT 
			ID_USUARIO
		,	YEAR(FECHA_VENTA) as ANIO
	FROM libreria_23506.VENTA
	) AS uf

ORDER BY ANIO DESC;

-- LIBROS POR AUTOR
-- JOINS


SELECT *
FROM libreria_23506.LINK_AUTOR_LIBRO;

SELECT 
		a.NOMBRE
	,	link.CODIGO_LIBRO
	,	l.TITULO
FROM libreria_23506.AUTOR AS a
LEFT JOIN libreria_23506.LINK_AUTOR_LIBRO AS link
ON a.CODIGO_AUTOR = link.CODIGO_AUTOR 

LEFT JOIN libreria_23506.LIBRO as l
ON link.CODIGO_LIBRO = l.CODIGO_LIBRO;